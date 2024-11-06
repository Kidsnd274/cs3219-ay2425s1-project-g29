export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig(event);
  const endPoint = runtimeConfig.questionService;
  const response = await $fetch(`${endPoint}/questions`, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: getHeader(event, "authorization") || "",
    },
  });

  return response;
});