function statusServer(request, response) {
  response.status(200).json({ mensagem: "Eu sou acima da média!" });
}

export default statusServer;
