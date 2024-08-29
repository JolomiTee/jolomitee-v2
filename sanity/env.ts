export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-29'

export const dataset = assertValue(
	"production",
	"Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
	"3k15q33o", // using process.env.ENV_Variable seems to cause an error, that is why the naked ProjectId is here
	"Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
