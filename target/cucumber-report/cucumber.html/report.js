$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "computer Page Test",
  "description": "As  a user I should choose to build my own computer",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3834317000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I should navigate to computer page successfully",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am in Computers Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should able to verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 66692200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 20036437300,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f0753cda1b5b154838eec032d7dd950c, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@23811a09]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60884}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60884/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f0753cda1b5b154838eec032d7dd950c\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnComputer(ComputerPage.java:34)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnComputerTab(ComputerPageTest.java:15)\r\n\tat ✽.When I click on computer tab(computer.feature:7)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\t\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\t\tat com.nopcommerce.demo.pages.ComputerPage.clickOnComputer(ComputerPage.java:34)\r\n\t\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnComputerTab(ComputerPageTest.java:15)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.nopcommerce.demo.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnComputer(ComputerPage.java:34)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnComputerTab(ComputerPageTest.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Computers\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f0753cda1b5b154838eec032d7dd950c, findElement {using\u003did, value\u003dComputers}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60884}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60884/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f0753cda1b5b154838eec032d7dd950c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:201)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:152)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 78 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerPageTest.iAmInComputersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerPageTest.iShouldAbleToVerifyText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 838740300,
  "status": "passed"
});
formatter.before({
  "duration": 2484955100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "As a user I should navigate to desktops page successfully",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click on Desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should able to verify the \"Desktops\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 20055543300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Desktops\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [db4c6c2e821326ea2999106d5c8d3127, findElement {using\u003did, value\u003dDesktops}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60924}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60924/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: db4c6c2e821326ea2999106d5c8d3127\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopLink(ComputerPage.java:39)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnDesktopTab(ComputerPageTest.java:24)\r\n\tat ✽.When I click on Desktop tab(computer.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 29
    }
  ],
  "location": "ComputerPageTest.iShouldAbleToVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 847728900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "As a user I should be able to build my own computer",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on ADD TO CART Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 28,
      "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2GB",
        "320Gb",
        "Vista Home [+$50.00",
        "Microsoft Office [+$50.00]"
      ],
      "line": 29,
      "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;2"
    },
    {
      "cells": [
        "2.5GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Vista Premium [+$60.00]"
      ],
      "line": 30,
      "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 31,
      "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2434500700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "As a user I should be able to build my own computer",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"2GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"320Gb\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Home [+$50.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on ADD TO CART Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 20053319800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Desktops\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [15b4081d33fe31acd7f9b4fcf4620e47, findElement {using\u003did, value\u003dDesktops}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60963}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60963/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 15b4081d33fe31acd7f9b4fcf4620e47\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopLink(ComputerPage.java:39)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnDesktopTab(ComputerPageTest.java:24)\r\n\tat ✽.When I click on Desktop tab(computer.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "build your own computer",
      "offset": 12
    }
  ],
  "location": "ComputerPageTest.iClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRAM(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320Gb",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButoon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "ComputerPageTest.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 833635400,
  "status": "passed"
});
formatter.before({
  "duration": 2534636000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "As a user I should be able to build my own computer",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select processor \"2.5GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on ADD TO CART Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 20013812200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Desktops\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1516af954f2ebfd9ef13f1f186ff4c55, findElement {using\u003did, value\u003dDesktops}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61008/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1516af954f2ebfd9ef13f1f186ff4c55\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopLink(ComputerPage.java:39)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnDesktopTab(ComputerPageTest.java:24)\r\n\tat ✽.When I click on Desktop tab(computer.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "build your own computer",
      "offset": 12
    }
  ],
  "location": "ComputerPageTest.iClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRAM(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButoon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "ComputerPageTest.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 818262800,
  "status": "passed"
});
formatter.before({
  "duration": 2081345600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "As a user I should be able to build my own computer",
  "description": "",
  "id": "computer-page-test;as-a-user-i-should-be-able-to-build-my-own-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on ADD TO CART Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 20049837400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Desktops\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f8dba373337f8e8b7ba889754078ff83, findElement {using\u003did, value\u003dDesktops}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61065}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61065/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f8dba373337f8e8b7ba889754078ff83\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnDesktopLink(ComputerPage.java:39)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.iClickOnDesktopTab(ComputerPageTest.java:24)\r\n\tat ✽.When I click on Desktop tab(computer.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "build your own computer",
      "offset": 12
    }
  ],
  "location": "ComputerPageTest.iClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRAM(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButoon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "ComputerPageTest.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 819336500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As aUser I want to login into nopcommerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2436907400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity,"
    },
    {
      "line": 3,
      "name": "@smoke,"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click On login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see \"Welcome, Please sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 422239500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please sign In!",
      "offset": 25
    }
  ],
  "location": "LoginTest.iShouldBeAbleToSee(String)"
});
formatter.result({
  "duration": 25549600,
  "status": "passed"
});
formatter.after({
  "duration": 603145900,
  "status": "passed"
});
formatter.before({
  "duration": 2507177000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke,"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click On login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"prime123gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"xyz123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Login was unsuccessful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 424734200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 46150900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 44033300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 37630900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful",
      "offset": 32
    }
  ],
  "location": "LoginTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 40035876200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027message-error validation-summary-errors\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c5e502dc01d18a2b04a037bf9375424c, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027message-error validation-summary-errors\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61123}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61123/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c5e502dc01d18a2b04a037bf9375424c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getErrorMessage(LoginPage.java:52)\r\n\tat com.nopcommerce.demo.steps.LoginTest.iShouldSeeTheErrorMessage(LoginTest.java:63)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful\"(login.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 809704900,
  "status": "passed"
});
formatter.before({
  "duration": 2468698800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify user should successfully login with valid credentials",
  "description": "",
  "id": "login-test;verify-user-should-successfully-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click On login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"testing789@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"xyz123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see log out link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 134800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 442594400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing789@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 47061400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 49939400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 344190300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldSeeLogOutLinkDisplay()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.after({
  "duration": 609211500,
  "status": "passed"
});
formatter.before({
  "duration": 2468860300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify user should logout successfully",
  "description": "",
  "id": "login-test;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click On login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"testing789@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"xyz123\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see log out option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 418199200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing789@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 46117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 47343800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 346835800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldSeeLogOutOption()"
});
formatter.result({
  "duration": 10600,
  "status": "passed"
});
formatter.after({
  "duration": 607466500,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I want to register successfully",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1938348900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in HomePage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke,"
    },
    {
      "line": 6,
      "name": "@sanity,"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see the \"register\" page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.iamOnHomepage()"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 667579500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iShouldBeAbleToNavigateToTheRegistrationPage()"
});
formatter.result({
  "duration": 81900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register",
      "offset": 29
    }
  ],
  "location": "RegisterPageTest.iShouldBeAbleToSeeThePageTitle(String)"
});
formatter.result({
  "duration": 41088700,
  "error_message": "java.lang.AssertionError: expected [Register] but found [register]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.nopcommerce.demo.steps.RegisterPageTest.iShouldBeAbleToSeeThePageTitle(RegisterPageTest.java:23)\r\n\tat ✽.And I should be able to see the \"register\" page title(register.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 724676000,
  "status": "passed"
});
formatter.before({
  "duration": 2546563700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in HomePage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "register-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke,"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I did not enter First name \"FirstName\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see message \"First name is required\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I did not enter Last name \"Lastname\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see message \"Last name is required\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I did not enter Email \"Email\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see message \"Email is required\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I did not enter Password \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see message \"Password is required\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I did not enter confirm Password \"Confirm password\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"Password is required\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.iDidNotEnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lastname",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.iDidNotEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 23
    }
  ],
  "location": "RegisterPageTest.iDidNotEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iDidNotEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm password",
      "offset": 34
    }
  ],
  "location": "RegisterPageTest.iDidNotEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required",
      "offset": 32
    }
  ],
  "location": "LoginTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 607494700,
  "status": "passed"
});
formatter.before({
  "duration": 1795639500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is in HomePage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should create account successfully",
  "description": "",
  "id": "register-test;verify-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"abcd\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter lastname \"xyza\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select day \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select month \"august\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select year \"1990\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email \"testing789@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"xyz123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirm password \"xyz123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should be able to verify message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 457190500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterPageTest.iSelectGender()"
});
formatter.result({
  "duration": 119500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.RegisterPageTest.iSelectGender() in file:/C:/Users/chand/IdeaProjects/nopcommerce-cucumber/target/test-classes/\u0027 with pattern [^I select gender \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Female]. \nStep: And I select gender \"Female\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 20
    }
  ],
  "location": "RegisterPageTest.iEnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyza",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterLastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "RegisterPageTest.iSelectDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "august",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.iSelectMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iSelectYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testing789@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 36
    }
  ],
  "location": "ComputerPageTest.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 759853300,
  "status": "passed"
});
});