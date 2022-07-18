function devspeek() {
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Hello, I am pumkin no need to talk untill i am speeking";
  window.speechSynthesis.speak(msg);
}
