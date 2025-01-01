import { Pokemon } from '@/hooks/usePokemon';
import { randomPokemonImage } from '@/lib/utils';

type PokemonCardProps = {
	pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	return (
		<>
			<div className='w-full rounded-lg overflow-hidden shadow-lg bg-card'>
				<img className='w-full' src={randomPokemonImage()} alt='Sunset in the mountains' />
				<div className='px-6 py-4'>
					<div className='font-bold text-2xl mb-2'>{pokemon.name}</div>
					<p className='text-primary text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
						Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#photography
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#travel
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#winter
					</span>
				</div>
			</div>
		</>
	);
};
export default PokemonCard;