class TwitchController < ApplicationController
  def index
    render layout: "twitch_layout"
  end

  def user
    user_url = "https://wind-bow.glitch.me/twitch-api/users/#{username_params}"
    render json: {user: HTTParty.get(user_url)}
  end

  def stream
    stream_url = "https://wind-bow.glitch.me/twitch-api/streams/#{username_params}"
    render json: HTTParty.get(stream_url).body
  end

  def channel
    channel_url = "https://wind-bow.glitch.me/twitch-api/channels/#{username_params}"
    render json: {channel: HTTParty.get(channel_url)}
  end

  private

  def username_params
    params.require(:username)
  end
end
