class CalcController < ApplicationController
  def index
    @cacl = Calc.all
    render json: @cacl
  end

  def create
    @suma = 0;
    @invalidData = []
    params[:numbers].each do |i|
      if (i.kind_of? Integer) || (i.kind_of? Float)
        @suma += i
      elsif i.kind_of? String
        if is_number(i)
          @suma += i.to_f
        else
          @invalidData << i
        end
      else
        @invalidData << i  
      end
    end
   
    @cacl = Calc.new({numbers:  params[:numbers].join(","), result: @suma, invalidData: @invalidData.join(",") })
    if @cacl.save
      render json: @cacl, status: :created, location: @cacl
    else
      render json: @cacl.errors, status: :unprocessable_entity
    end
  end

  def is_number(string)
    true if Float(string) rescue false
  end

  private
  def calc_params
    params.require(:calc).permit(:numbers)
  end

end
