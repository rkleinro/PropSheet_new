import boto3


def create_contests_table(dynamodb=None):
    if not dynamodb:
        dynamodb = dynamodb = boto3.resource('dynamodb')

    table = dynamodb.create_table(
        TableName='Contests',
        KeySchema=[
            {
                'AttributeName': 'userID',
                'KeyType': 'HASH'  # Partition key
            },
            {
                'AttributeName': 'ContestID',
                'KeyType': 'RANGE'  # Sort key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'userID',
                'AttributeType': 'S'
            },
            {
                'AttributeName': 'ContestID',
                'AttributeType': 'N'
            },

        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 10,
            'WriteCapacityUnits': 10
        }
    )
    return table


if __name__ == '__main__':
    contests_table = create_contests_table()
    print("Table status:", contests_table.table_status)

