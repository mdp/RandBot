### The Amazing Randbot

RandBot's is a demo of the API for [MachinePoker](https://github.com/mdp/MachinePoker)

#### The remote API

Pokerbots should respond to two calls

##### GET: Should return the bot's basic info via JSON

Example Response:

    {
      name: "Randbot"
      , btcWallet: "1DAxkDntXRk6N7eUaKiiPGvwXuaaAkd7PL"
    }

##### POST: Should expect to receive a JSON payload with game data and return a bet

Example Request: [https://gist.github.com/mdp/050cd82f651eb9f9b9c8](https://gist.github.com/mdp/050cd82f651eb9f9b9c8)

Example Response:

    {
      bet: 10
    }

