export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "Mensagem não enviada" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Respostas automáticas
    let responseMessage = "Desculpe, não entendi sua mensagem.";
    let options: string[] | undefined;

    if (message.toLowerCase().includes("oi")) {
      responseMessage = "Olá! Como posso ajudar você?";
    } else if (message.toLowerCase().includes("tudo bem")) {
      responseMessage = "Estou bem, obrigado! E você?";
    } else if (message.toLowerCase().includes("adeus")) {
      responseMessage = "Até logo! Volte sempre.";
    } else if (message.toLowerCase().includes("consultar dívida")) {
      responseMessage = "Por favor, escolha uma das opções abaixo:";
      options = ["Renegociar", "Sair"];
    } else if (message.toLowerCase().includes("renegociar")) {
      responseMessage = "Escolha uma das opções que deseja renegociar";
      options =  ["Banco do Brasil - R$ 1.920", "Faculdade - R$ 20.320"]
    }
    return new Response(
      JSON.stringify({ response: responseMessage, options }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erro no processamento da requisição" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
