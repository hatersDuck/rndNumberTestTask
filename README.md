
# Тестовое задание на вакансию backend-разработчик (Задание 1)
Проект представляет собой API для генерации и сохранения числа.

## Технологии
* **Node.js**
* **npm**
* **TypeScript**
* **Express.js**
* **crypto**

## Endpoints

- `POST /` - Генерирует число
  Возвращает: `number` (сгененрированное число)

- `GET /:id` - Взять по id сделанную генерацию
  Возвращает:  
  ```json
  {
    "id": number,
    "value": number,
    "timestamp": "string"
  }
  ```

## Run

```bash
npm install
npm run build
npm run start
```

Port: `3000`

# Задание 2
Тут я бы точно уточнил про таблицу ban_list
- Обнуляются ли все покупки когда пользователь забанен
- Или только совершённые после бана
- Или это вообще бан в чате поддержки
Реализацию сделаю для второго случая, т.к. это самое логичное, что покупка после бана не засчитывается, а до бана засчитывается.

```sql
SELECT u.id, u.firstname, u.lastname
FROM user u
LEFT JOIN ban_list b ON u.id = b.user_id
LEFT JOIN purchase p ON u.id = p.user_id AND (b.date IS NULL OR p.date < b.date)
WHERE p.sku is NULL
```

# Уточнение некоторых моментов
## Задание 1:
### Почему `POST` для генерации числа
1. Сохранение (сейчас в ОЗУ, могло идти в БД) =>
  - Если было бы без сохранение то это был бы GET
  - POST не требует идемпотентности (иногда она нужна, но не в этой задаче), а так как генерация вадаёт случайное число, то она очевидна не идомпотента. Поэтому не требует кэширования. 
Также задание бы абсолютно подругому решалось если было бы использовался не id, а seed.
### Сделал память в ОЗУ
Проще-лучше, проще ОЗУ ничего не существует.
## Задание 2
Я предположил из-за структуры ban_list, что бан навсегда и банов не может быть более одного на пользователя, а также предположил, что бан влияет на покупки.
