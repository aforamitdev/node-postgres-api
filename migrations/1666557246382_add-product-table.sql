-- Up Migration

CREATE TABLE
    item (
        product VARCHAR(255) NOT NULL,
        id UUID NOT NULL PRIMARY KEY,
        description VARCHAR(255),
        suk text
    );

-- Down Migration