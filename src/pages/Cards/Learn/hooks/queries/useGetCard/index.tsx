import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface ICardBe {
  frontSideText: string;
  backSideText: string;
  id: number;
}

export function useGetCard(): UseQueryResult<ICardBe[]> {
  return useQuery<ICardBe[]>(["cards"]);
}
