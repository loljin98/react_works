
use jsdb;

-- product 테이블 생성
create table product(
	-- 칼럼명 자료형 
    id int auto_increment primary key,	-- PRIMARY KEY = 숫자형 기본키
    product_name varchar(30) not null, -- not null = 문자열 필수 입력
    price int not null,
    created_at timestamp default current_timestamp -- 날짜 및 시간
);

-- 상품추가
insert into product(product_name, price) values ('무선마우스', 32000);
insert into product(product_name, price) values ('test', 1);


-- 상품조회
select * from product;

-- 특정한 조건 검색
select * from product where id = 2;
select * from product where price > 50000;

-- 모니터의 가격을 10만원으로 변경
update product set price = 100000 where id = 2;

-- test 삭제ALTER
delete from product where id = 3; 

commit; -- 커밋 완료








