import { useState, useEffect } from "react";

export function useGetFromStore(store: any, callback: any) {
  const result = store(callback);
}
