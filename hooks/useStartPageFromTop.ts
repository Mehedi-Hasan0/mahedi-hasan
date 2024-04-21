"use client";

import { useEffect } from "react";

export default function useStartPageFromTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
