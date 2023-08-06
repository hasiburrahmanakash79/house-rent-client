import { useForm } from 'react-hook-form'

const SearchHouse = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors }
  } = useForm()
  // onsubmit sending data to server
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <section className='w-11/12 mx-auto space-y-5 text-center py-10'>
      <h2 className='text-5xl font-bold'>For rates & Availability</h2>
      <p className='text-2xl font-semibold'>
        Search your House
      </p>
      <form
        className='grid grid-cols-1 md:grid-cols-4 md:gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-control'>
          <label className='font-bold uppercase label'>Living Area</label>
          <input
            type='text'
            placeholder='where do you want to live?'
            className='input input-bordered w-full max-w-xs'
            {...register('area', { required: true })}
            name='area'
          />
          {/* TODO:add a x sign to clear the text by clicking on it */}
          {errors.name && (
            <span className='text-orange-600'>Area is required</span>
          )}
        </div>
        <div className='form-control'>
          <label className='font-bold uppercase label'>Type</label>
          <select
            className='bg-white select select-bordered'
            {...register('type')}
          >
            <option value='apartment'>Apartments</option>
            <option value='shared'>Shared</option>
            <option value='airbnb'>AirBnb</option>
          </select>
        </div>
        <div className='items-center justify-center md:gap-2 md:flex'>
          <div className='w-full'>
            <label className='font-bold uppercase label'>Price </label>
            <input
              className='input input-bordered w-full max-w-xs'
              type='text'
              placeholder='mini'
              name='minimum'
              {...register('minimum')}
            />
          </div>
          <div className='w-8 pt-4 mx-auto mt-12 text-black divider divider-vertical' />
          <div className='w-full'>
            <label className='font-bold uppercase label'>Price </label>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs'
              placeholder='max'
              name='maximum'
              {...register('maximum', { required: true })}
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='font-bold uppercase label'>For</label>
          <select
            className='py-3 bg-white select select-bordered'
            {...register('for')}
          >
            <option value='family'>Family</option>
            <option value='couple'>Couple</option>
            <option value='single'>Single</option>
          </select>
        </div>

        <div className='mt-4 md:col-span-4'>
          <button
            type='submit'
            className='px-12 mx-auto transition-all rounded-full hover:bg-green-700 hover:delay-75 w-fit btn-primary'
          >
            Check Availability
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchHouse
