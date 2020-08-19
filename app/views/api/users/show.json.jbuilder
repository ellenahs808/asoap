# json.partial! "api/users/user", user: user 

json.extract! user, :id, :first_name, :last_name, :email
