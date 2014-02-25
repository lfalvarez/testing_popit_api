var should = require("should");
var request = require('supertest');
var app = require('../server');

describe("The app", function(){
  it("has an api endpoint", function(done){
    request(app)
      .get('/api')
      .expect(200)
      .end(function(err,res){
        should.not.exist(err)
        done()
      })
  })
});
