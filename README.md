# CORS Playground — v1.1: заголовок есть, но не помогает

## Участники

- **Фронтенд** — `http://localhost:3000`
- **Бэкенд** — `http://localhost:4000`

## Условие

В v1.0 мы научились чинить CORS, добавив заголовок `Access-Control-Allow-Origin` на сервере. Сейчас заголовок на месте — но ошибка в консоли всё равно есть, и текст ошибки **выглядит один в один как в v1.0**.

```mermaid
sequenceDiagram
    participant B as Браузер (origin: localhost:3000)
    participant S as Сервер (origin: localhost:4000)

    B->>S: GET /api/data
    S-->>B: 200 OK + JSON + заголовок Access-Control-Allow-Origin
    Note over B: Браузер проверяет заголовок:<br/>разрешён ли ЭТОТ origin?
    B--xB: fetch() падает в .catch()<br/>Console: "blocked by CORS policy"
```

## Задача

1. Воспроизведи ошибку, открой вкладку Network → ответ на `/api/data` → Response Headers.
2. Сравни значение заголовка `Access-Control-Allow-Origin` с тем, откуда реально пришёл запрос (адресная строка браузера).
3. Сформулируй гипотезу: почему заголовок есть, а браузер всё равно блокирует?
4. Почини на сервере — [server/server.js](server/server.js).

**Подсказка, если застрял:** заголовок в CORS — это не «включить/выключить», а конкретное значение, которое браузер сверяет строка-в-строку с `Origin` запроса. Никаких wildcard-подстановок вида `localhost:*` не существует.

**Как понять, что фикс сработал:** ошибка в Console исчезает, на странице вместо `Error: ...` отображается JSON.
