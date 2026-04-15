import { type FileIcon } from "../../../../core";
import type { LucodearFileIcon } from "../../models";
import { lucodear } from "../utils";

const bea = lucodear("bea", [
  {
    name: "bea-jpd",
    fileExtensions: ["jpd"],
  },
  {
    name: "bea-dtf",
    fileExtensions: ["dtf"],
  },
  {
    name: "bea-jws",
    fileExtensions: ["jws"],
  },
] satisfies LucodearFileIcon[]);

export const beaOverrides = [
  {
    name: "bea-wsdl",
    fileExtensions: ["wsdl"],
    clone: {
      base: "xml",
      color: "blue-400",
    },
  },
  {
    name: "bea-xq",
    fileExtensions: ["xq"],
    clone: {
      base: "xml",
      color: "teal-400",
    },
  },
  {
    name: "bea-xsd",
    fileExtensions: ["xsd"],
    clone: {
      base: "xml",
      color: "red-400",
    },
  },
  {
    name: "bea-jcx",
    fileExtensions: ["jcx"],
    clone: {
      base: "java",
      color: "indigo-400",
    },
  },
  {
    name: "bea-jcs",
    fileExtensions: ["jcs"],
    clone: {
      base: "java",
      color: "orange-400",
    },
  },
] as FileIcon[];

export const files: LucodearFileIcon[] = [...bea];
