$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/GSMArenaNews.feature");
formatter.feature({
  "line": 1,
  "name": "GSM Arena News testing",
  "description": "In order to use Cucumber in my project, I want to check how to test GSM Arena News page",
  "id": "gsm-arena-news-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "GSM Arena open page - passing",
  "description": "",
  "id": "gsm-arena-news-testing;gsm-arena-open-page---passing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open \u0027News\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "page \u0027News\u0027 should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page \u0027News\u0027 should contains all items",
  "keyword": "And "
});
formatter.match({
  "location": "GSMArenaNewsSteps.iAmOnMainPage()"
});
formatter.result({
  "duration": 75200414500,
  "status": "passed"
});
formatter.match({
  "location": "GSMArenaNewsSteps.iOpenNewsPage()"
});
formatter.result({
  "duration": 59258454600,
  "error_message": "java.lang.AssertionError: News page is not opened! expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat com.qaprosoft.carina.demo.cucumber.steps.GSMArenaNewsSteps.iOpenNewsPage(GSMArenaNewsSteps.java:35)\r\n\tat ✽.When I open \u0027News\u0027 page(src/test/resources/features/GSMArenaNews.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GSMArenaNewsSteps.pageSettingsShouldBeOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GSMArenaNewsSteps.pageSettingsShouldContainsAllItems()"
});
formatter.result({
  "status": "skipped"
});
});