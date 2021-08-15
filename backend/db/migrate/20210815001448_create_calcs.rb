class CreateCalcs < ActiveRecord::Migration[5.2]
  def change
    create_table :calcs do |t|
      t.string :numbers
      t.decimal :result
      t.string :invalidData

      t.timestamps
    end
  end
end
