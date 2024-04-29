import React from "react";
import PrivyProviderContainer from "~/components/privy/provider";

export default function PrivyLayout({ children }: { children: React.ReactNode }) {
  return <PrivyProviderContainer>{children}</PrivyProviderContainer>;
}
