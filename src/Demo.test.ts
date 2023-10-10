import { expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import Demo from "./Demo.svelte";

it("can render demo", async () => {
  const { container } = render(Demo);
  const paragraph = container.querySelector("p");
  expect(paragraph).toHaveTextContent("Demo URL:")
});

