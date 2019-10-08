class Api::BoardsController < ApplicationController

  

  def create
    # debugger
    @board = Board.new(board_params)
    @board.author_id = current_user.id
    if @board.save
      # debugger
      render '/api/boards/index'
    else
      # debugger
      render json: @board.errors.full_messages, status: 401
    end
  end

  def index
    @boards = Board.all.includes(:author)
    # debugger
    render '/api/boards/index'
  end

  def update
    
    if @board.update(board_params)
        render 'api/boards/index'
    else
        render json: @board.errors.full_messages, status: 422
    end  
  end

  def destroy
    board = current_user.authored_boards.find_by(id:params[:id])
    board.destroy
    render 'api/boards/index'
  end

  private

  def board_params
    params.require(:board).permit(:author_id, :name)
  end

end