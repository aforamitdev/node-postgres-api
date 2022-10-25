-- Up Migration

-- Up Migration

CREATE TABLE
    IF NOT EXISTS country(
        id UUID NOT NULL PRIMARY KEY,
        name text,
        code text
    );

CREATE TABLE
    IF NOT EXISTS state(
        id UUID PRIMARY KEY NOT NULL,
        name text NOT NULL,
        code text NOT NULL,
        country_id UUID,
        CONSTRAINT country_id FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE
        SET NULL
    );

CREATE TABLE
    IF NOT EXISTS address(
        id UUID PRIMARY KEY NOT NULL,
        street_address_1 VARCHAR(255),
        street_address_2 VARCHAR(255),
        city text,
        state_id UUID,
        zipcode text,
        longitude numeric,
        latitude numeric,
        CONSTRAINT state_id FOREIGN KEY(state_id) REFERENCES state(id)
    );

CREATE TABLE
    IF NOT EXISTS item (
        product VARCHAR(255) NOT NULL,
        id UUID NOT NULL PRIMARY KEY,
        description VARCHAR(255),
        suk text
    );

create table
    IF NOT EXISTS company(
        id UUID NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        logo_url VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        website_url VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        address_id UUID,
        CONSTRAINT address_id FOREIGN KEY(address_id) REFERENCES address(id)
    );

-- Down Migration