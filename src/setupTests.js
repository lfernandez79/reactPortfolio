import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("vanta/dist/vanta.net.min", () => ({
  default: () => ({ destroy: vi.fn() }),
}));
