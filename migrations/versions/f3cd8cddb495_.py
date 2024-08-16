"""empty message

Revision ID: f3cd8cddb495
Revises: 5ea2c1e35a90
Create Date: 2024-08-16 14:16:49.058811

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f3cd8cddb495'
down_revision = '5ea2c1e35a90'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mascota', schema=None) as batch_op:
        batch_op.drop_column('coord_x')
        batch_op.drop_column('coord_y')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mascota', schema=None) as batch_op:
        batch_op.add_column(sa.Column('coord_y', sa.NUMERIC(precision=10, scale=6), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('coord_x', sa.NUMERIC(precision=10, scale=6), autoincrement=False, nullable=True))

    # ### end Alembic commands ###
