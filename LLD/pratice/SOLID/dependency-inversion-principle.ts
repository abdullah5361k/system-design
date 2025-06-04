interface MessageService {
  send(message: string): void;
}

class EmailService implements MessageService {
  send(message: string) {
    console.log("Sending a email " + message);
  }
}

class SlackService implements MessageService {
  send(message: string) {
    console.log("Sending a slack message " + message);
  }
}

class AppNotifications {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    // DI -> Lose coupling
    this.messageService = messageService;
  }

  notify(message: string) {
    this.messageService.send(message);
  }
}

function main() {
  const emailNotifier = new AppNotifications(new EmailService());

  emailNotifier.notify("Notify via email");

  const slackNotifier = new AppNotifications(new SlackService());

  slackNotifier.notify("Notify via slack!");
}

main();
