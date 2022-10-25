![](2022-10-18-00-38-52.png)

migration script example

```
    "migrate:create": "node-pg-migrate create $name -j $type"
```

    name=create_company_table type=sql npm run migrate:create
