import * as pt from "pareto-core-types"
import { TResult } from "../types/types.p"

export type FCall = (
    $: string,
) => pt.AsyncValue<TResult>
