export type ResponseAI = {
  id: string;
  provider: string;
  model: string;
  object: string;
  created: number;
  choices: [
    {
      logprobs: null;
      finish_reason: string;
      native_finish_reason: string;
      index: number;
      message: {
        role: string;
        content: string;
        refusal: null;
      };
    }
  ];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};
