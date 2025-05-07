
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
Тут я бы точно уточнил про таблицу ban_list, обнуляются ли все покупки когда пользователь забанен или только совершённые после бана.
Реализацию сделаю для второго случая, т.к. логичнее, что покупка после бана не засчитывается, а до бана засчитывается.

```sql
SELECT u.id, u.firstname, u.lastname
FROM user u
LEFT JOIN ban_list b ON u.id = b.user_id
LEFT JOIN purchase p ON u.id = p.user_id AND (b.date IS NULL OR p.date < b.date)
WHERE p.sku is NULL
```