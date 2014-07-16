class Api::EntriesController < ApplicationController
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy!
    render :json => @entry
  end
  
  def index
    feed = Feed.find(params[:feed_id])
    render :json => feed.entries
  end

  private
  def entry_params
    params.
      require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
