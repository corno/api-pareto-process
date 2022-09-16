export type TError = {
    readonly "stderr": string,
    readonly "exitCode": null | number
}

export type TResult =
    | ["success", string]
    | ["error", TError]