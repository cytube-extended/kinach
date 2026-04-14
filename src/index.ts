import { inline } from "./inline";

export default function () {
  inline();

  const url = new URL("lazy.js", import.meta.env.BASE_URL).toString();
  const modPromise: Promise<typeof import("./lazy")> = import(url);
  modPromise.then((mod) => mod.lazy());
}
