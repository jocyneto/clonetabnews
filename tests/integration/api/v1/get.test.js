test("GET to /api/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // fetch é como se fosse o Curl, vai devolver uma promise sem o await
  expect(response.status).toBe(200);
});
