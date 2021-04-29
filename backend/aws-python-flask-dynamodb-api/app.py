import os

import boto3
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from google.oauth2 import id_token
from google.auth.transport import requests
from pprint import pprint

request2 = requests.Request()

app = Flask(__name__)
CORS(app)


# dynamodb_client = boto3.client('dynamodb')

# if os.environ.get('IS_OFFLINE'):
#     dynamodb_client = boto3.client(
#         'dynamodb', region_name='localhost', endpoint_url='http://localhost:8000'
#     )


USERS_TABLE = os.environ['USERS_TABLE']


@app.route('/users/<string:user_id>')
def get_user(user_id):
    result = dynamodb_client.get_item(
        TableName=USERS_TABLE, Key={'userId': {'S': user_id}}
    )
    item = result.get('Item')
    if not item:
        return jsonify({'error': 'Could not find user with provided "userId"'}), 404

    return jsonify(
        {'userId': item.get('userId').get('S'), 'name': item.get('name').get('S')}
    )


@app.route('/users', methods=['POST'])
def create_user():
    user_id = request.json.get('userId')
    name = request.json.get('name')
    if not user_id or not name:
        return jsonify({'error': 'Please provide both "userId" and "name"'}), 400

    dynamodb_client.put_item(
        TableName=USERS_TABLE, Item={'userId': {'S': user_id}, 'name': {'S': name}}
    )

    return jsonify({'userId': user_id, 'name': name})

@app.route('/whoami', methods=['GET'])
def whoami_user():
    return jsonify({'userId': 'rmk328', 'name': "Ross"})

@app.route('/contests', methods=['GET'])
def contests():
    token=request.headers.get('Authorization')
    try:
        id_info = id_token.verify_firebase_token(token, request2)
        userid = id_info['sub']
        print(userid)
        return jsonify([{
        'ContestID': 1,
        'ContestName': 'Super Bowl Sunday!',
        'Sport': 'Football',
        'Entrants': 233,
        'TotalEntries': 500,
        'EntryFee': 30,
        'TotalWinnings': 12000,
        },
        {
        'ContestID': 2,
        'ContestName': 'Hardcore Super Bowl',
        'Sport': 'Football',
        'Entrants': 233,
        'TotalEntries': 250,
        'EntryFee': 100,
        'TotalWinnings': 20000,
        },
         {
        'ContestID': 3,
        'ContestName': 'Masters Challenge!',
        'Sport': 'Football',
        'Entrants': 233,
        'TotalEntries': 500,
        'EntryFee': 30,
        'TotalWinnings': 12000,
        }
        ])
    except:
        return "",(401)


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)

# def query_my_contests(userId):
#     if not dynamodb:
#         dynamodb = boto3.resource('dynamodb')
#     table = dynamodb.Table('Contests')
#     response = table.query(
#         KeyConditionExpression=Key('userId').eq(userId)
#     )
#     return response['Items']
# def join_contest(userId, contestID):
#     if not dynamodb:
#         dynamodb = boto3.resource('dynamodb')
#     table = dynamodb.Table('Contests')
#     response = table.put_item(
#         Item={
#             'userId': userId,
#             'contestName': contestID
#         },
#     )
#     return response['Items']
# def query_contests():
#     if not dynamodb:
#         dynamodb = boto3.resource('dynamodb')
#     table = dynamodb.Table('Contests')
#     response = table.scan()
#     return response['Items']
# @app.route('/contests', methods=['GET'])
# def contests:
#     items = query_contests()
#     return jsonify(items)

