import FetchRequest from "./fetchRequest.js";
import XmlRequest from "./xmlRequest.js";
import Controller from "./controller.js";

// • Реализовать 2 класса для запроса к беку с помощью fetch и XMLHttpRequest
// • Реализовать класс контроллер(фасад), в который можно передать одну из реализаций классов выше и использовать контроллер, как «черный ящик»(контроллер дублирует методы запросов, но скрывает реализацию движка запров)
// • Результаты всех запросов также вывести в консоль
// • Сделать нужно все запросы которые есть в API

// с помощью fetch

// const request = new FetchRequest("http://37.220.80.108");
// request.getAll();
// request.getId("6");
// request.post("Victoria", "doctor", false);
// request.patchId("7", "Oleg", "doctor", false, true);
// request.deleteId("8");

// с помощью XMLHttpRequest

// const request2 = new XmlRequest("http://37.220.80.108");
// request2.getAll();
// request2.getId("3");
// request2.post("Vadim", "teacher", true);
// request2.patchId("7", "Vladimir", "teacher", true, false);
// request2.deleteId("8");

// контроллер(фасад) через fetch

// const controller = new Controller(new FetchRequest("http://37.220.80.108"));
// controller.getAll();
// controller.getId("3");
// controller.post("Evgeniy", "policeman", true);
// controller.patchId("7", "Evgeniy", "policeman", false, true);
// controller.deleteId("5");

// контроллер(фасад) через XMLHttpRequest

// const controller = new Controller(new XmlRequest("http://37.220.80.108"));
// controller.getAll();
// controller.getId("3");
// controller.post("Evgeniy", "policeman", true);
// controller.patchId("7", "Evgeniy", "policeman", false, true);
// controller.deleteId("38");
