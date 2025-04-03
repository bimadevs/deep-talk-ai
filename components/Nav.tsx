"use client";

import { useLayoutEffect, useState } from "react";
import HumeLogo from "./logos/Hume";
import { Button } from "./ui/button";
import { Moon, Sun, UserCircle2Icon } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from '@/package.json';

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <img src="./logo-no-background.png" alt="" className="w-28" />
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            window.open(
              pkg.homepage,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
          <UserCircle2Icon className={"size-5"}/>
          </span>
          <span>Join to My Grub Chat</span>
        </Button>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
