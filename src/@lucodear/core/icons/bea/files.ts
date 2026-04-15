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
  {
    name: "bea-channel",
    fileExtensions: ["channel"],
  },
  {
    name: "bea-pipeline",
    fileExtensions: ["pipeline"],
  },
  {
    name: "bea-proxy",
    fileExtensions: ["proxy", "proxyservice", "proxy-service"],
  },
  {
    name: "bea-bix",
    fileExtensions: ["bix", "businessservice", "business-service"],
    clone: {
      base: "file-bea-proxy",
      color: "pink-400",
    }
  }
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
    name: "bea-wadl",
    fileExtensions: ["wadl"],
    clone: {
      base: "xml",
      color: "cyan-400",
    },
  },
  {
    name: "bea-xq",
    fileExtensions: ["xq", "xquery", "xqy"],
    clone: {
      base: "xml",
      color: "teal-400",
    },
  },
  {
    name: "bea-jca",
    fileExtensions: ["jca"],
    clone: {
      base: "xml",
      color: "gray-400",
    },
  },
  {
    name: "mfl",
    fileExtensions: ["mfl"],
    clone: {
      base: "xml",
      color: "pink-400",
    },
  },
  {
    name: "bea-build",
    fileNames: ["build.xml"],
    clone: {
      base: "settings",
      color: "yellow-600",
    },
  },
  {
    name: "bea-work",
    fileExtensions: ["work"],
    clone: {
      base: "settings",
      color: "blue-gray-400",
    },
  },
  {
    name: "bea-xsd",
    fileExtensions: ["xsd", "xmlschema"],
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
