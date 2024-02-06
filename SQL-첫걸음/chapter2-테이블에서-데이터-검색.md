## 2. 테이블에서 데이터 검색

### 자료형
- `INTEGER`: 정수 값을 저장할 수 있음. 소수점은 포함할 수 없음.
- `CHAR`: 문자열을 저장할 수 있는 자료형. 언제나 고정된 길이로 데이터가 저장. `CHAR(10)` 처럼 문자열 길이를 정의
- `VARCHAR`: 가변길이 문자열 자료형. `VARCHAR(10)` 처럼 문자열 최대 길이를 정의
- `DATE`: 날짜 값을 저장할 수 있는 자료형
- `TIME`: 시간을 저장할 수 있는 자료형

</br></br>

### DESC

테이블에 어떤 열이 정의되어 있는지 확인

```sql
DESC table_name;
```

</br></br>

### SELECT

```sql
SELECT * FROM table_name;
```

- `SELECT`: 명령의 종류
- `*`: 모든 열을 선택 (메타 문자)
- `FROM`: 데이터를 검색할 테이블의 이름
- `table_name`: 데이터를 검색할 테이블의 이름

</br>

#### SELECT 구에서 열 지정

```sql
SELECT column1, column2 FROM table_name;
```

</br>

#### SELECT 구에서 행 지정하기 (WHERE)

```sql
SELECT * FROM table_name WHERE 조건식;
```

```sql
SELECT * FROM table_name WHERE column1 = 'value';


-- <>: not. 값이 서로 다른 경우
SELECT * FROM table_name WHERE column1 <> 'value';

-- NULL 값 검색
SELECT * FROM table_name WHERE column1 IS NULL;
SELECT * FROM table_name WHERE column1 IS NOT NULL;
```

</br>

#### 조건식

```sql
SELECT * FROM table_name WHERE 조건식1 AND 조건식1;
```

```sql
SELECT * FROM table_name WHERE column1 = 'value' AND column2 = 'value';

SELECT * FROM table_name WHERE column1 = 'value' OR column2 = 'value';

-- AND의 우선순위가 OR보다 높기 때문에 괄호 사용
SELECT * FROM table_name WHERE column1 = 'value' AND (column2 = 'value' OR column3 = 'value');

SELECT * FROM table_name WHERE NOT(column1 = 'value' OR column2 = 'value');
```

</br>

#### 패턴 매칭에 의한 검색

`LIKE`: 부분 검색  
LIKE에서 사용할 수 있는 메타 문자
- `%`: 임의의 문자열
- `_`: 임의의 문자 하나

```sql
-- 문자열 value로 시작하는 문자열 검색 (전방일치)
SELECT * FROM table_name WHERE column1 LIKE 'value%';

-- 문자열 value가 포함된 문자열 검색 (중간일치)
SELECT * FROM table_name WHERE column1 LIKE '%value%';

-- 문자열 value로 끝나는 문자열 검색 (후방일치)
SELECT * FROM table_name WHERE column1 LIKE '%value%';

-- 메타 문자가 포함된 문자열 검색 (이스케이프)
SELECT * FROM table_name WHERE column1 LIKE '%\%%';

-- 조건 문자열 상수 안에 '가 포함된 경우 ''로 이스케이프
SELECT * FROM table_name WHERE column1 LIKE 'It''s';
```

