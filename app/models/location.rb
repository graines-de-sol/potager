class Location < ActiveRecord::Base
  has_many :members, :dependent=>:destroy
  has_many :surveys, :dependent=>:destroy
  has_many :articles, :dependent=>:destroy
end

