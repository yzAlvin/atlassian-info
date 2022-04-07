import React from "react";
import { render, screen } from "@testing-library/react";

import Info, { InfoType } from "./Info";

describe("Button", () => {
  it("should render text", () => {
    const someText = "Hello world!";
    render(<Info type={InfoType.Info} text={someText} />);
    expect(screen.getByText(someText)).toBeInTheDocument();
  });
  it("should render title", () => {
    const someTitle = "Title";
    render(<Info type={InfoType.Info} title={someTitle} />);
    expect(screen.getByText(someTitle)).toBeInTheDocument();
  });
  it("should render title and text", () => {
    const someTitle = "Title";
    const someText = "Hello world!";
    render(<Info type={InfoType.Info} title={someTitle} text={someText} />);
    expect(screen.getByText(someTitle)).toBeInTheDocument();
    expect(screen.getByText(someText)).toBeInTheDocument();
  });
  it("should render symbol", () => {
    const someSymbol = "😍";
    render(<Info type={InfoType.Info} symbol={someSymbol} />);
    expect(screen.getByText(someSymbol)).toBeInTheDocument();
  });
});
