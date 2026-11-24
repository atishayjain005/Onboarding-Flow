import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
afterEach(() => { localStorage.clear(); jest.restoreAllMocks(); });
function open(path = "/") { render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>); }
test("completion with missing draft recovers to first step", () => {
  open("/stepFour");
  expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
});
test("rejects whitespace and saves trimmed names through a form", () => {
  open();
  fireEvent.change(screen.getByLabelText("Full Name"), {target: {value: "    "}});
  fireEvent.click(screen.getByRole("button", {name: "Continue"}));
  expect(screen.getAllByRole("alert")).toHaveLength(2);
  fireEvent.change(screen.getByLabelText("Full Name"), {target: {value: " Ada Lovelace "}});
  fireEvent.change(screen.getByLabelText("Display Name"), {target: {value: " Ada L "}});
  fireEvent.submit(screen.getByRole("button", {name: "Continue"}).closest("form"));
  expect(screen.getByLabelText("Workspace Name")).toHaveAttribute("type", "text");
  expect(JSON.parse(localStorage.getItem("flow-one")).displayName).toBe("Ada L");
});
test("blocked storage keeps entered text visible", () => {
  open();
  fireEvent.change(screen.getByLabelText("Full Name"), {target: {value: "Ada Lovelace"}});
  fireEvent.change(screen.getByLabelText("Display Name"), {target: {value: "Ada L"}});
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
  fireEvent.click(screen.getByRole("button", {name: "Continue"}));
  expect(screen.getByRole("alert")).toHaveTextContent("could not save");
  expect(screen.getByLabelText("Full Name")).toHaveValue("Ada Lovelace");
});

test("usage choice is persisted and completion describes a demo", () => {
  localStorage.setItem("flow-one", JSON.stringify({fullName: "Ada Lovelace", displayName: "Ada L"}));
  localStorage.setItem("flow-two", JSON.stringify({workspaceName: "Research"}));
  open("/stepThree");
  fireEvent.click(screen.getByRole("radio", {name: /With my team/}));
  fireEvent.click(screen.getByRole("button", {name: "Complete demo"}));
  expect(JSON.parse(localStorage.getItem("flow-three"))).toEqual({usage: "team"});
  expect(screen.getByText(/No account or live workspace/)).toBeInTheDocument();
  expect(screen.getByText("Research · Team workspace")).toBeInTheDocument();
});
test("direct usage route requires a profile", () => {
  open("/stepThree");
  expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
});
