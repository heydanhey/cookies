module JsonWebToken
  require 'jwt'

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload)
  end

  def self.decode(token)
    token
  end
end