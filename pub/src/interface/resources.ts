import * as pt from "pareto-core-types"

export type Call_Data = string

export type Call_Interface = {
    onError: (
        $: {
            stderr: string,
            exitCode?: number
        }
    ) => void
}

export type Call_ReturnValue = pt.AsyncValue<string | null>

export type Call = (
    $: Call_Data,
    $i: Call_Interface,
) => Call_ReturnValue
