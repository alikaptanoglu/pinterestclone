
json.extract! user, :id, :email, :first_name, :last_name, :location, :age
json.photoUrl url_for(user.photo)