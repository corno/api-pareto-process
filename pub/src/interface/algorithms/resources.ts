import * as pt from "pareto-core-types"

export type ACall = (
    $: string,
    $i: {
        readonly onError: (
            $: {
               readonly "stderr": string,
               readonly "exitCode"?: number
            }
        ) => void
    },
) => pt.AsyncValue<string | null>
