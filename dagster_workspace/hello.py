from dagster import asset, Definitions

@asset
def hello_datalake():
    return "Hello, Lakehouse!"

defs = Definitions(
    assets=[hello_datalake],
)
