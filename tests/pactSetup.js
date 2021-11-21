const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;
global.port = 8991;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  spec: 2,
  pactfileWriteMode: "overwrite",
  consumer: "Todo App",
  provider: "Todo Api",
  providerBaseUrl: "http://localhost:9000",
  publishVerificationResult: true,
});
